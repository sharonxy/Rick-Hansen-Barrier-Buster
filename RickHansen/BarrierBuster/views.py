from django.shortcuts import get_object_or_404, render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.core.urlresolvers import reverse
from BarrierBuster.models import *
from BarrierBuster.form import *
from datetime import datetime
from django.contrib import messages

def index(request):
    return render(request, 'BarrierBuster/index.html')

def createPin(request):
# Create your views here.
	if request.method == 'POST':
		pinform = PinForm(request.POST, request.FILES)
		if pinform.is_valid():
			newpin = pinform.save(commit=False)
			newpin.date_created = datetime.now()
			newpin.save()
			messages.success(request, 'Thanks for, a new pin has been created.')
			return redirect(reverse('BarrierBuster:index'))
	else:
		pinform = PinForm()
	return render(request, 'BarrierBuster/create_pin.html', {'form1': pinform})

def searchPin(request):
	tag = 'All'
	status = 'All'
	if request.method == 'POST':
		tag = request.POST['tag']
		status = request.POST['status']
		pin_list = Pin.objects.filter(tag='tag', status='status')
#		pin_list = Pin.objects.all()
		searchForm = SearchForm(initial={'tag': tag, 'status': status})
		return render(request, 'BarrierBuster/search_pin.html', {'pin_list': pin_list, 'searchForm': searchForm})

	searchForm = SearchForm(initial={'tag': tag, 'status': status})
	return render(request, 'BarrierBuster/search_pin.html', {'searchForm': searchForm})

