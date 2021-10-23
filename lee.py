import os
import json
from flask import Flask,Response, render_template,request,jsonify,make_response
propety={}
k=True
path = '.'
rez = sorted(os.listdir(path))
for ree in rez:
    propety[ree]=os.stat(ree)  
str=json.dumps(propety)
app=Flask(__name__)
@app.route("/ajax",methods = ['GET','POST'])
def ajax(): 
    return str
@app.route("/",methods = ['GET','POST'])
def index():
    return render_template("post.html")
    
if __name__=='__main__':
    app.run()
 