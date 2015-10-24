from django.conf.urls import patterns, url
from BarrierBuster import views

urlpatterns = patterns('',
    url(r'^$', views.index, name='index'),
    url(r'^createPin/$', views.createPin, name='createPin'),
)