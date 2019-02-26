# jupyter
* `pip install jupyter`

## run
```
jupyter notebook
```

## python3
```
pip install ipykernel
python3 -m ipykernel install --user
```

## install pip in jupyter
```
!pip install bs4
```

## sample

```python
import sys
sys.path.append('/home/ec2-user/notebook/lib')
from pandas import Series, DataFrame

import mydb

sql = """-- 회원
select count(*) from USER
"""

result = mydb.query(sql, ())
df = DataFrame(result)

print(df)
```

```python
df.to_excel('01-member.xls', index=False)
print('Done')
```

```python
import mysql.connector

def query(sql, params):
    mydb = mysql.connector.connect(
      host="localhost",
      user="okdev",
      passwd="okpass",
      database="okdevtv"
    )

    mycursor = mydb.cursor()

    mycursor.execute(sql, params)
    
    mydb.close()

    return mycursor.fetchall()
```

## ref
* https://www.dataquest.io/blog/jupyter-notebook-tips-tricks-shortcuts/
