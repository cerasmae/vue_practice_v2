# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from django.views import View

# Create your views here.
class Index(View):
	template_name = "index.html"

	def get(self, request):
		return render(request, template_name=self.template_name)