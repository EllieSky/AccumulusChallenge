# AccumulusChallenge

## Part 1:

### **If you had to build an automated test framework from scratch, what would be your ideal tech stack?**

There is no one ideal tech stack. What is ideal for one team / product / application can often be a bad fit for another.
The technical savvy of the team, their skill set, the size of the team, and available company resources all significantly impact what would ultimately be the best set of tools/processes/type of framework to use.
For example, if a team is highly technical, I will always advise against BDD. However if a team is very small or has very few SDET and is mostly manual IC, BDD may be a necessary evil. 
Similarly, if there is a robust DevOps team, I would rally for using git actions, otherwise something like Jenkins may be an easier alternative due to the multitude of available plugins. This is also true for Web test automation tool selection and Performance testing / automation, as well as reporting and TCM software.


### **What makes you a great Test Automation engineer, and why?**

During my interview with Accumulus the phrase "strategically lazy" was brought up in reference to process automation and test automation. 
I am great at Test Automation because I rather not do things over and over manually, nor have my team do things manually. I'd rather take the 'lazy' approach and automate it, then kick back and enjoy the magic of CI/CD.
I wholeheartedly believe that "strategic laziness" is one of the key metrics of a team's dedication to products quality and product maturity.
In my experience the more of the test/release process automated, the higher the product quality and the higher client satisfaction. It also directly correlates with the work/life balance of the development, product and customer support teams. I believe that only through automation can a product/service reach true excellence of quality. 
I get great satisfaction knowing something tedious, repetitive, or multistep has been automated. I enjoy the challenge of finding a way to automate something that is tricky to automate, that others may view as not-automatable. I pride myself on being "strategically lazy".



## Part 2:
1. Download and install Node.js(Recommended version 16 or above) from https://nodejs.org/en/download/
2. Clone the repo by executing the following command in your local: git clone git@github.com:EllieSky/AccumulusChallenge.git
3. Run following command to setup all the required dependency: npm install
4. Run following command to execute the config file and run the test: npm test
