from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

pets = []

@app.route("/")
def home():
    return "PAWC Command Backend is Live!"

@app.route("/api/pets", methods=["POST"])
def register_pet():
    data = request.get_json()
    pets.append(data)
    return jsonify({"message": "Pet registered successfully!", "pets": pets})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)