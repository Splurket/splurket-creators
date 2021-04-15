@app.route('/front_id_image', methods = ['POST'])
def front_id_image_endpoint():
    try:
        HTTP_X_REAL_IP = request.environ.get('HTTP_X_REAL_IP', request.remote_addr)
        writetoapilog(f"/front_id_image was called at {nowstring()} from {HTTP_X_REAL_IP} ")
        assert("data_url" in request.json)
        assert("submission_id" in request.json)
        size = request.json['size']
        type = request.json['type']
        submission_id = request.json['submission_id']
        writetoapilog(f" submission_id={submission_id} size={size} type={type} ")
        data_url = request.json['data_url']
        mimetype,nakedstring = data_url.split(';base64,')
        path = f"static/cardimages/{submission_id}_front_id_image.jpg"
        with open(path, "wb") as fh:
            fh.write(base64.b64decode(nakedstring))
        writetoapilog(f"/front_id_image returned success at {nowstring()} to {HTTP_X_REAL_IP} ")
        writetoapilog(f" wrote image to {path}")
        return jsonify({'Result': "upload successful"})
    except Exception as e:
        writetoapilog(f"/front_id_image returned exception at {nowstring()} to {HTTP_X_REAL_IP} ")
        writetoapilog(repr(e))
        return jsonify({'Error':repr(e)}), 406