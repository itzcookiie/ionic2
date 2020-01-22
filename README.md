# ionic2

## How to run

- Git clone the repository
- Run the following commands:
- ```npm i```
- (At this point, connect your mobile device to your computer)
- ``` ionic build```
- ```ionic cap copy```
- For android ```ionic cap run android -l --external``` or for iPhone ```ionic cap run ios -l --external```

## Notes

- I have an android phone, so I was only able to develop on an android device
- In terms of file structure, the contents of user-profile have the name tab2. This is because I used the original files created by ionic CLI, as I felt renaming all the files would lead to unwanted conflicts

## Thoughts
Learning and using typescript, ionic and angular was pretty fun. Getting my head around everything took longer than I thought, but I am pretty happy with what I've done. I attempted to build out the wireframes for each view, but ended up focusing more on the functionality and left the designs out. 

I also decided to use Storage from the capacitor API as my "mock" store/database instead of creating a back end. I made this decision because I wanted to focus more on front end development.

