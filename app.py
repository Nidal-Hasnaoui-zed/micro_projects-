from flask import Flask , render_template 

app = Flask(__name__)

@app.route('/')
def index(): 
    return 'hey my name is nidal !'

if __name__ == '__main__': 
    app.run(debug=True)