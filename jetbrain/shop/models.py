from django.db import models


# Create your models here.
class Product(models.Model):
    slug = models.SlugField(max_length=120)
    title = models.CharField(max_length=120)
    desc = models.TextField(max_length=1200, null=True)
    short_desc = models.TextField(max_length=1200, null=True)
    long_desc = models.TextField(max_length=1200, null=True)
    specifications = models.TextField(max_length=1200, null=True)
    is_active = models.BooleanField(default=True)
    product_sub_category = models.CharField(max_length=100, null=True)
    product_tags = models.CharField(max_length=100, null=True)
    product_listing_type = models.CharField(max_length=100, null=True)
