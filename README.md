# json2mysql

## What is this?

This is simple application which imports json files located in data folder and insert into mysql database

## How to do it?

### Step 1 
Create table in your mysql database

#### eg. color and foos table
"`
CREATE TABLE color(
color VARCHAR(10) NOT NULL,
value VARCHAR(4) NOT NULL,
 PRIMARY KEY (color)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE foos(
prop1 VARCHAR(10) NOT NULL,
prop2 VARCHAR(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
`"

### Step 2
generate json file with table name and write data in the format below.
"`
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
`"
#### eg. color data with color and value column
"`
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
`"
## Step run application 
npm start
