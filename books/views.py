# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.views import View

from django.shortcuts import render

# Create your views here.
class BooksPage(View):
	template_name = "cards.html"

	def get(self, request):
		return render(request, template_name=self.template_name)