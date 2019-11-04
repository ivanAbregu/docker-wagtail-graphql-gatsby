from django.db import models

from wagtail.core.models import Page
from wagtail.core import blocks
from wagtail.core.fields import StreamField
from wagtail.images.blocks import ImageChooserBlock
from wagtail.admin.edit_handlers import (FieldPanel, FieldRowPanel,
                                         InlinePanel, MultiFieldPanel,
                                         PageChooserPanel, StreamFieldPanel)

from grapple.models import (
    GraphQLString,
    GraphQLStreamfield,
)

class Task(models.Model):
    author = models.CharField(max_length=255)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=250, blank=True, null=True)
    done = models.BooleanField(default=False)
    end_date = models.DateTimeField()
    def __str__(self):
        return "%s, name: %s" % (self.id, self.name)
