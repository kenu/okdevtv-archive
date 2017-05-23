# pandas
* Python Data Analysis Library
* http://pandas.pydata.org/

* http://pandas.pydata.org/pandas-docs/stable/10min.html

## to number
* dash to number
```
df.apply(pd.to_numeric, errors='coerce')
```
* fill N/A
```
df.fillna(0.0)
```

## column edit
* column names

```
df.columns = ['prdcode', 'category', 'prdname', 'brand']
```

* drop

```
# drop row 0-2
df.drop(df.index[:3], inplace=True) # row

# drop column
df.drop('column_name', 1)
df.drop('column_name', axis=1, inplace=True)
```

* reorder

```
df2 = df[['prdcode', 'category', 'prdname', 'brand']]
df2.head()
```

## column type change

```
df[['ZIP_NO']] = df[['ZIP_NO']].astype(str)
```

## Tutorial
* http://pandas.pydata.org/pandas-docs/stable/tutorials.html
* 01 - Lesson: - Importing libraries - Creating data sets - Creating data frames - Reading from CSV - Exporting to CSV - Finding maximums - Plotting data
* 02 - Lesson: - Reading from TXT - Exporting to TXT - Selecting top/bottom records - Descriptive statistics - Grouping/sorting data
* 03 - Lesson: - Creating functions - Reading from EXCEL - Exporting to EXCEL - Outliers - Lambda functions - Slice and dice data
* 04 - Lesson: - Adding/deleting columns - Index operations
* 05 - Lesson: - Stack/Unstack/Transpose functions
* 06 - Lesson: - GroupBy function
* 07 - Lesson: - Ways to calculate outliers
* 08 - Lesson: - Read from Microsoft SQL databases
* 09 - Lesson: - Export to CSV/EXCEL/TXT
* 10 - Lesson: - Converting between different kinds of formats
* 11 - Lesson: - Combining data from various sources

