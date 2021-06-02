# Week 14

## Homework - Space Station Restaurant Incubator

You recently got promoted to regional manager at "Space Station Restaurant Incubator", a capacity 5 locale dining area that has space frisbee and space cornhole board. People want to bring their space families here, and dine at one to several of these locations, and let their kids space frolick around.

Your first task as manager is to create a delivery website that has a master dropdown menu with all the new restaurants as options, which will change the colors/theme of the entire page so that while you're buying food from one restaurant, the site will adopt that theme, and as you switch between the restaurants, it updates automatically.

## Requirements:

* Clone this repo (if you haven't already)
  * in `/src/index.js`, toggle the commenting so that the App is imported from `"./Incubator"`


* Create a <Header /> component that has a dropdown (<select />) in it where you can select which restaurant you want to shop at.
* App ought to control the "theme/colors" (`useState`)
  * Pass your `setTheme` method to the `<Header />` component, when the user changes restaurants, use either a useEffect or other method you prefer and use `props.setColors`
* Make sure there's a `<RestaurantName />` component that displays the name of the restaurant using the right colors
* Feel free to tweak existing restaurant colors to make your app unique, or just add more restaurants in the `./src/restaurantdata.js` file
* Each menu item should have this or similar structure (everything inside `<MenuItem />` should be `styled` component, so pass down theme colors in some way):

```jsx
const MenuItem = props => {
  return (
    <Card>
      <Title />
      <CardBody>
        <CardText />
        <CardPrice />
      </CardBody>
    </Card>
  );
}
```

* Cart Management:
  * Track what items people are buying with state, display the total items and price somewhere.
  * Allow deleting items
    * Make the delete button turn "red" (using props and styled components), and require them to click it again. (in leiu of asking "Are you sure?") (you'll want to use `useState` for this, something like `const [confirmDelete, setConfirmDelete] = useState(false);`), and use that variable to change the color using `styled-components`.

### Rules:
* Make this app look at least half way decent. I know it's been a while, but css chops do matter. :grimacing: 
* All styling needs to be done using `styled-components`
  * No `style={}` tags.
  * Feel free to remove `/src/App.css`, but _DO NOT_ add any styles any other way other than with `styled-components`
* Utilize all colors from each restaurant _dynamically_, they should update the page colors once you change restaurants.
* Use props to pass colors to child components to match the currently selected restaurant's theme.

## Stretch Goals:

* Do some reading on React's Context API and use that as the way to manage "Theme".
  * https://robinvdvleuten.nl/blog/how-to-use-react-context/
  * https://www.smashingmagazine.com/2020/01/introduction-react-context-api/