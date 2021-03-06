# Generated by Django 4.0 on 2021-12-14 12:59

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('slug', models.SlugField(max_length=120)),
                ('title', models.CharField(max_length=120)),
                ('desc', models.TextField(max_length=1200, null=True)),
                ('short_desc', models.TextField(max_length=1200, null=True)),
                ('long_desc', models.TextField(max_length=1200, null=True)),
                ('specifications', models.TextField(max_length=1200, null=True)),
                ('is_active', models.BooleanField(default=True)),
                ('product_sub_category', models.CharField(max_length=100, null=True)),
                ('product_tags', models.CharField(max_length=100, null=True)),
                ('product_listing_type', models.CharField(max_length=100, null=True)),
            ],
        ),
    ]
