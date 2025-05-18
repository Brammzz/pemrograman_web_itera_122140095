from pyramid.view import view_config
from pyramid.httpexceptions import HTTPNotFound, HTTPBadRequest
from ..models import Matakuliah

@view_config(route_name='matakuliah_list', renderer='json', request_method='GET')
def list_matakuliah(request):
    return {'matakuliah': [m.to_dict() for m in request.dbsession.query(Matakuliah).all()]}

@view_config(route_name='matakuliah_detail', renderer='json', request_method='GET')
def get_matakuliah(request):
    mk = request.dbsession.query(Matakuliah).get(request.matchdict.get('id'))
    return {'matakuliah': mk.to_dict()} if mk else HTTPNotFound()

@view_config(route_name='matakuliah_create', renderer='json', request_method='POST')
def create_matakuliah(request):
    data = request.json_body
    if not all(k in data for k in ('kode_mk', 'nama_mk', 'sks', 'semester')):
        return HTTPBadRequest(json_body={'error': 'Semua field wajib diisi'})
    mk = Matakuliah(**data)
    request.dbsession.add(mk)
    return {'message': 'Berhasil', 'matakuliah': mk.to_dict()}

@view_config(route_name='matakuliah_update', renderer='json', request_method='PUT')
def update_matakuliah(request):
    mk = request.dbsession.query(Matakuliah).get(request.matchdict.get('id'))
    if not mk:
        return HTTPNotFound()
    data = request.json_body
    for key in data:
        setattr(mk, key, data[key])
    return {'message': 'Updated', 'matakuliah': mk.to_dict()}

@view_config(route_name='matakuliah_delete', renderer='json', request_method='DELETE')
def delete_matakuliah(request):
    mk = request.dbsession.query(Matakuliah).get(request.matchdict.get('id'))
    if not mk:
        return HTTPNotFound()
    request.dbsession.delete(mk)
    return {'message': 'Deleted'}
