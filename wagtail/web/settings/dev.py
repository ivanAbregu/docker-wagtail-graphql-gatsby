from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '72q)tz#_4)k&#*i!w&@f@rvevafs(tu#lhmx*xv+5mu0qum4xk'

# SECURITY WARNING: define the correct hosts in production!
ALLOWED_HOSTS = ['*'] 

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'


try:
    from .local import *
except ImportError:
    pass
# ALLOWED_HOSTS = ['*']
CORS_ORIGIN_ALLOW_ALL = True 
# CORS_ORIGIN_WHITELIST = (
#     'http://localhost:8008/'
# )