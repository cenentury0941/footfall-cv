![Alt Text](https://raw.githubusercontent.com/cenentury0941/Pictures/main/footfallheader.png)

## What is FootfallCV?

FootfallCV is an enterprise-level computer vision-powered application designed to monitor and understand customer behavior in convenience and big-box stores. By analyzing customer behavior, businesses can optimize their shop layouts to increase the chances of customers viewing more products and making add-on purchases, thereby improving overall sales.

## Demo Video
[![IMAGE ALT TEXT HERE](https://raw.githubusercontent.com/cenentury0941/Pictures/main/Screenshot%20from%202024-05-27%2006-44-55.png)](https://www.youtube.com/watch?v=2ok3rjqW4Xk)

## Planograms

A planogram, often abbreviated as POG, is a visual representation or diagram that illustrates how products should be displayed on shelves or within store aisles. It's essentially a strategic blueprint for arranging merchandise in a retail space to maximize sales and optimize the shopping experience for customers. Planograms take into account factors such as product popularity, seasonality, promotional strategies, and consumer behavior to create an efficient layout that encourages impulse purchases and ensures that products are easily accessible and visually appealing to shoppers. Retailers use planograms to streamline inventory management, improve shelf space utilization, and ultimately drive higher sales.

![Alt Text](https://raw.githubusercontent.com/cenentury0941/Pictures/main/Screenshot%20from%202024-05-27%2006-42-23.png)

## AI Summarization

### 1. Data Collection
FootfallCV employs advanced computer vision technology to monitor customer behavior in retail environments. Multiple cameras strategically placed throughout the store capture data on customer movements, interactions with products, and other relevant behaviors.

### 2. Data Processing
The raw data collected by FootfallCV encompasses a vast array of information, including customer traffic patterns, dwell times, popular areas of the store, and product interactions.

### 3. AI Summarization with GPT-4
GPT-4, being a state-of-the-art AI model, is employed to process this raw CV data. It utilizes natural language processing capabilities to analyze the data and generate concise summaries and actionable insights.

### 4. Insight Generation
GPT-4 can extract meaningful insights from the CV data collected by FootfallCV. For example, it can identify peak hours of customer traffic, popular product categories, optimal store layouts, and even predict future trends based on historical data.

### 5. Actionable Information for Businesses
The summarized insights provided by GPT-4 enable businesses to make informed decisions. Retailers can use this information to optimize store layouts, adjust inventory levels, schedule staff effectively, and design targeted marketing campaigns to enhance the overall shopping experience.


## Process Flow

    Monitor   - Use multiple cameras to monitor customer behavior across the store.
    Understand  - Compile data from all cameras to gain a comprehensive understanding of customer behavior.
    Act  - Modify the store's layout or inventory based on observed customer behavior to optimize sales.

## Advanced CV-Based Monitoring

     1. FootfallCV utilizes computer vision powered by Network Optix and NxMeta for reliable customer tracking.

     2. Real-time analytics provide business owners with up-to-date insights into their customer base.

     3. Global trend analysis helps businesses stay competitive by adapting to changing customer behaviors.

## Advantages of FootfallCV

    - Customer-Centric Experience: FootfallCV's analytics can be used to create a more personalized and engaging shopping experience.
    - Informed Inventory Management: Businesses can make inventory decisions based on subtle cues from customer behavior, leading to better stock management.
    - Optimized Store Layout: By understanding customer behavior, businesses can optimize their store layouts to improve customer flow and increase sales.
    - Increased Goods Movement: By increasing customer retention time through optimized layouts, businesses can improve the turnover of goods.

# Instructions

1. Install and setup Nx Meta Client and Server
2. Install the Nx AI Manager Plugin
3. Clone this repository.

## Setup Nx Meta

    - Setup a few test cameras
    - Add the following camera rule for each camera (take note that the URL has to be modified with the camera name replaced at the end)

![Alt Text](https://raw.githubusercontent.com/cenentury0941/Pictures/main/Screenshot%20from%202024-05-27%2006-50-24.png)

## Start the NodeJS Server

    - Open a terminal/bash window at the footfall-server folder
    - Run
    
    npm install
    node app.js


## Start the ReactJS Application

    - Open a terminal/bash window at the footfall-client folder
    - Run
    
    npm install
    npm start

    - Add the ReactJS application as a webpage within Nx Meta using it's url

![Alt Text](https://raw.githubusercontent.com/cenentury0941/Pictures/main/Screenshot%20from%202024-05-27%2006-46-52.png)

## Functionality

![Alt Text](https://raw.githubusercontent.com/cenentury0941/Pictures/main/Screenshot%20from%202024-05-27%2006-44-55.png)


### Currently we added the following functionalities:

    - Usage of Nx AI Manager to detect and track people
    - Stream the detections to the nodeJS server
    - Retrieve the data from the nodeJS server
    - Display the traffic analytics
    - Add basic inventory information for each camera in the React App
    - Summarize the data using GPT4

### Planned functionality in progress:

    - Heatmap rendition of the traffic using postprocessors
    - Better inventory management solution
    - More accurate tracking of individuals across video feeds

