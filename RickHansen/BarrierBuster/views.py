from django.shortcuts import get_object_or_404, render, render_to_response, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.core.urlresolvers import reverse
from BarrierBuster.models import *
from BarrierBuster.form import *
from datetime import datetime
from django.contrib import messages
from django.core import serializers
from django.views.decorators.csrf import csrf_protect
from django.conf import settings

def index(request):
	data = serializers.serialize('json', Pin.objects.all())
	return render_to_response('BarrierBuster/index.html', {'allPins': data})

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
	tag1 = 'All'
	status1 = 'All'
	if request.method == 'POST':
		tag1 = request.POST['tag']
		status1 = request.POST['status']

		if tag1!='All' and status1 !='All':
			pin_list = Pin.objects.filter(tag=tag1, status=status1)
		elif tag1 !='All' and status1 == 'All':
			pin_list = Pin.objects.filter(tag=tag1)
		elif status1 != 'All' and tag1 == 'All':
			pin_list = Pin.objects.filter(status=status1)		
		else:
			pin_list = Pin.objects.all()

		data = serializers.serialize('json', pin_list)
		searchForm = SearchForm(initial={'tag': tag1, 'status': status1})
		return render(request, 'BarrierBuster/search_pin.html', {'pin_list': pin_list, 'allPins': data, 'searchForm': searchForm})

	data = serializers.serialize('json', Pin.objects.all())
	searchForm = SearchForm(initial={'tag': tag1, 'status': status1})
	return render(request, 'BarrierBuster/search_pin.html', {'allPins': data, 'searchForm': searchForm})

def pinDetail(request, pin_id):
	pin = get_object_or_404(Pin, pk=pin_id)
	data = serializers.serialize('json', Pin.objects.filter(pk=pin_id))
	if pin.img:
		return render(request, 'BarrierBuster/search_pin.html', {'allPins': data, 'pin': pin, 'image_path': settings.STATIC_URL + pin.img.url[7:]})
	else:
		return render(request, 'BarrierBuster/search_pin.html', {'allPins': data, 'pin': pin})

