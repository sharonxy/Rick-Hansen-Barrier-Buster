from django.shortcuts import get_object_or_404, render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.core.urlresolvers import reverse
from BarrierBuster.models import *
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


