from django.db import models

from datetime import datetime

# Create your models here.
class Pin(models.Model):
	Tag_Choice = (('Curb Cut', 'Curb Cut'), ('Sidewalk','Sidewalk'), ('Accessible Path','Accessible Path'), ('Transit','Transit'), ('Food', 'Food'), ('Music', 'Music'), ('Networking', 'Networking'),('Party', 'Party'), ('Sport', 'Sport'), ('Wine','Wine'), ('Others', 'Others'))
	Status_Choice = (('Barrier'),('In Progress'),('Resolved'),('Best Practice'))
	#General information about Pin
	tag = models.CharField(max_length=50, choices=Tag_Choice, blank=False, default='Accessible Path')
	status = models.CharField(max_length=20, choices=Status_Choice, blank=False, default='Barrier')
	description = models.CharField(max_length=250, null=True, blank=True)
	date_created = models.DateField(required)
	date_updated = models.DataField(blank=True)
	


