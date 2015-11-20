## Website Performance Optimization portfolio project

####Optimizations for speeding up index.html

- Minify HTML, CSS
- Run script tags asynchronously
- Optimize image delivery using ImageMin
- Allow for loading nice-to-have properties of the page like the Google Font after the initial page render
- Inline core CSS into index.html for displaying above-the-fold page styling immediately

####Optimizations for pizza.html

- Added will-change: transform property to the appropriate class holder of pizza's, this allows the browser to cache the transformation
- Moved the FSL problem of referencing document.body.scrollTop outside of the for loop on line main.js:513, this stops layout from being run unnecessarily.
- Remove unnecessary for loop recomputation of dom element list lengths by assigning lengths to static variables
- Dynamically render only the numnber of pizzas that can fit on the screen using window.screen.height property
- Use better selectors than querySelector to target class selection/id selection more efficiently
- Only compute the pizza width transformation for one pizza and then apply the transformation in batch to the rest of the pizzas


####To run the project, follow the steps below:

- Install dependencies

  ```bash
  $> npm install
  ```
 
- Ensure imagemagick is installed 

```bash
$> brew install imagemagick
```

- Build with gulp 

```bash
$> gulp
```

- To run the server:

  ```bash
  $> cd /path/to/project-folder
  $> python -m SimpleHTTPServer 8080
  ```

- Open a browser and visit localhost:8080
- Download and install [ngrok](https://ngrok.com/) to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ngrok 8080
  ```

- Copy the public URL ngrok gives you and try running it through PageSpeed Insights!


