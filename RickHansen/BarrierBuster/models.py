from django.db import models
from django.forms import ModelForm, widgets
from datetime import datetime

# Create your models here.
class Pin(models.Model):
	Tag_Choice = (('Curb Cut', 'Curb Cut'), ('Sidewalk','Sidewalk'), ('Accessible Path','Accessible Path'))
	Status_Choice = (('Barrier','Barrier'),('In Progress','In Progress'),('Resolved', 'Resolved'),('Best Practice','Best Practice'))
	#General information about Pin
	tag = models.CharField(max_length=50, choices=Tag_Choice, blank=False, default='Accessible Path')
	status = models.CharField(max_length=20, choices=Status_Choice, blank=False, default='Barrier')
	description = models.TextField(max_length=500, null=True, blank=True)
	date_created = models.DateTimeField(blank=True, null=True)
	date_updated = models.DateTimeField(blank=True, null=True)
	address = models.TextField(max_length=500, null=True, blank=True)
	location_latitude = models.FloatField(blank=False)
	location_longitude = models.FloatField(blank=False)
	img = models.ImageField(upload_to='static/images/', blank=True, null=True)	

class Image(models.Model):
#	pin = models.ForeignKey(Pin)
	image = models.ImageField(upload_to='static/images/', blank=True, null=True)

class Comment(models.Model):
	pin = models.ForeignKey(Pin)
	comment = models.TextField(max_length=500, blank=True, null=True)
	date = models.DateTimeField(blank=True, null=True)

class PinForm(ModelForm):
	class Meta:
		model = Pin
		fields = '__all__'
        exclude = ['date_created','date_updated']
        widgets = {
        	'description': widgets.Textarea(attrs={'placeholder': 'Please provide details'}),
        }

class ImageForm(ModelForm):
	class Meta:
		model = Image
		fields = '__all__'
		exclude = ['pin']
		widgets = {
        	'image': widgets.FileInput
        }

class CommentForm(ModelForm):
	class Meta:
		model = Comment
		fields = '__all__'
		widgets = {
        	'comment': widgets.Textarea(attrs={'placeholder': 'Add your comment here'}),
        }
