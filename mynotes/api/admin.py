from django.contrib import admin
from .models import Notes
# Register your models here.

@admin.register(Notes)
class NoteAdmin(admin.ModelAdmin):
    list_display = ['body','created_at','updated_at',]
