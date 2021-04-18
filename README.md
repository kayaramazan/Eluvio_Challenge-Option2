# Eluvio_Challenge-Option2
Option 2 - Core Software Engineering

## Problem : 
  In this problem, we would like your program to find the longest strand of bytes that exists in at least two files. Your program should report which file names contain the strand and the byte offset where the strand occurs in each file.

## Installation

Install NodeJS on your computer from this [link](https://nodejs.dev/) 


## Algorithm Steps

- Checks args if args at least 2 file - line 80
- Reads the existing file, throw error if file does not exist - line 41:49
- Sorts files by content length - 52
- Keeps the shortest file as the common string size can be the maximum this file size. - line 55
- Check max  possible combination in loop and find the max length  - line 60:75

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
