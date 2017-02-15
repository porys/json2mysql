# json2mysql

## What is this?

This is simple application which imports json files located in data folder and insert into mysql database

## How to do it?

### Step 1 
Create table in your mysql database

#### eg. color and foos table
`
CREATE TABLE color(<br>
color VARCHAR(10) NOT NULL,<br>
value VARCHAR(4) NOT NULL,<br>
 PRIMARY KEY (color)<br>
) ENGINE=InnoDB DEFAULT CHARSET=utf8;<br>
<br>

CREATE TABLE foos(<br>
prop1 VARCHAR(10) NOT NULL,<br>
prop2 VARCHAR(10) NOT NULL<br>
) ENGINE=InnoDB DEFAULT CHARSET=utf8;<br>
`

### Step 2
generate json file with table name and write data in the format below.<br>
`
[
 {
  "columnname":"value",
  "columnname":"value"
 },
 {
  "columnname":"value",
  "columnname":"value"
 }
]
`
#### eg. color data with color and value column<br>
`
[
	{
		"color": "red",
		"value": "#f00"
	},
	{
		"color": "green",
		"value": "#0f0"
	}
]
`
## Step run application 
>> npm start
insert into color set color = 'red', value = '#f00'
insert into color set color = 'green', value = '#0f0'
