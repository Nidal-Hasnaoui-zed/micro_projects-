from flask import Flask , render_template 

app = Flask(__name__, template_folder='templates', static_folder='static', static_url_path='/')

@app.route('/')
def index(): 
    return render_template('index.html')

@app.route('/todo')
def todo_app(): 
    return render_template('todo.html');

@app.route('/notes')
def notes(): 
    return render_template('notes.html')

if __name__ == '__main__': 
    app.run(debug=True)
    
    