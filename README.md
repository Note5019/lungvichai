# LungVichai 
#### Start Project Date : 29-1-2019

### วิธีเพิ่ม bootstrap 
1. npm install bootstrap@4 jquery --save
2. go to file "angular.json"
3. add location of bootstrap both "styles" and "scripts"
```
"styles": [
              "src/styles.css",
              *"node_modules/bootstrap/dist/css/bootstrap.min.css"*

            ],
"scripts": [
            *"node_modules/jquery/dist/jquery.min.js"*,
            *"node_modules/bootstrap/dist/js/bootstrap.min.js"*]
```
[ลิ้ง stackOverflow](https://stackoverflow.com/questions/50290197/how-to-add-bootstrap-in-angular-6-project "link")
