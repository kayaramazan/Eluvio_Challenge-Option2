# Eluvio_Challenge-Option2
Option 2 - Core Software Engineering

## Problem : 
  In this problem, we would like your program to find the longest strand of bytes that exists in at least two files. Your program should report which file names contain the strand and the byte offset where the strand occurs in each file.

## Installation

Install NodeJS on your computer from this [link](https://nodejs.dev/) 


## Usage

```bash 
node app.js sample.6 sample.7
```
Arguments must be at least 2 file

- Expected Result : 
```
<------ Common Parts in Strings ------>

Longest Strand Size : 13312

File Name : sample.6 Offset : 0

File Name : sample.7 Offset : 0
```

```bash 
node app.js sample.6 sample.7 sample.1
```
- Expected Result : 
```
<------ Common Parts in Strings ------>

Longest Strand Size : 3072

File Name : sample.7 Offset : 0

File Name : sample.6 Offset : 0

File Name : sample.1 Offset : 0
```
