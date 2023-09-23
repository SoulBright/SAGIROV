from django.db import models


class Menu (models.Model):
    """Пункты меню"""
    title = models.CharField('Название', max_length=16, unique=True)
    url = models.CharField('url', max_length=128, unique=True)
    serial_number = models.IntegerField('Порядковый номер', max_length=2, unique=True)

    def __str__(self):
        return f'{self.title}'

    class Meta:
        verbose_name = 'Пункт меню'
        verbose_name_plural = 'Пункты Меню'


class Advantages (models.Model):
    """Контент блоков преимуществ"""
    top_line = models.CharField('Верхняя стока', max_length=16)
    center_line = models.CharField('Центральная стока', max_length=16)
    bottom_line = models.CharField('Нижняя стока', max_length=16)

    def __str__(self):
        return f'{self.top_line} {self.center_line} {self.bottom_line}'

    class Meta:
        verbose_name = 'Блок преимуществ'
        verbose_name_plural = 'Блоки преимуществ'
