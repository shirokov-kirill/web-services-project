from django.http import HttpResponse
from django.http import HttpRequest
from django.http import Http404


def simple_get_request(request):
    return HttpResponse(f'Hello from {2021} year.')


def define_complex_method(request: HttpRequest):
    if request.method == 'POST':
        return complex_post_request(request)
    if request.method == 'GET':
        return complex_get_request(request)


def complex_post_request(request: HttpRequest):
    product_type = request.POST.get('product_type', "")
    global_discount = request.POST.get('global_discount', 0)
    print(product_type)
    print(global_discount)
    if product_type == "" or product_type is None:
        raise Http404("No item selected")
    elif product_type == "Lego 254607":
        return HttpResponse(f'{10000 * (1 - global_discount)}')
    else:
        return HttpResponse("No such product available.")


def complex_get_request(request: HttpRequest):
    userId = request.GET.get('user_id', -1)
    print(userId)
    if userId == -1:
        return HttpResponse("Bad Request")
    elif userId == '':
            return HttpResponse(f'Your user id is undefined')
    else:
        return HttpResponse(f'Your user id is {userId}')