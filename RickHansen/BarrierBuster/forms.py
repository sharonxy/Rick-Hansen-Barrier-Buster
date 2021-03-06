from django import forms

class SearchForm(forms.Form):
	
	Tag_Choice = (('All', 'All'), ('Curb Cut', 'Curb Cut'), ('Sidewalk','Sidewalk'), ('Accessible Path','Accessible Path'),
		('Transit', 'Transit'), ('Public Elevator', 'Public Elevator'), ('Accessible Washroom', 'Accessible Washroom'),
		('Customer Service', 'Customer Service'), ('Accessible Entrance', 'Accessible Entrance'), ('Automatic Door', 'Automatic Door'),
		('Traffic Light Timing', 'Traffic Light Timing'), ('Traffic Light Low Sound', 'Traffic Light Low Sound'),
		('Accessible Parking', 'Accessible Parking'), ('Establishment Policy', 'Establishment Policy'), ('Other', 'Other'))
	Status_Choice = (('All', 'All'),('Barrier','Barrier'),('In Progress','In Progress'),('Resolved', 'Resolved'),('Best Practice','Best Practice'))

	tag=forms.ChoiceField(label='Tag', required=False, choices=Tag_Choice)
	status=forms.ChoiceField(label='Status', required=False, choices=Status_Choice)

	def _init_(self, *args, **kwargs):
		super(SearchForm, self)._init_(*args, **kwargs)
		self.initial['tag'] = 'All'
		self.initial['status'] = 'All'