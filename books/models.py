# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.conf import settings
from django.contrib.staticfiles.templatetags.staticfiles import static

def cover_upload_path(instance, filename):
	return './covers/cover_{}'.format(instance.title, filename)

# Create your models here.
class Book(models.Model):
	title = models.CharField(max_length=255, blank=False)
	description = models.TextField(blank=False)
	cover = models.FileField(upload_to=cover_upload_path, blank=True)

	@property
	def cover_url(self):
		if self.cover:
			return self.cover.url
		return static('img/default_cover.png')
	
	def __str__(self):
		return self.title