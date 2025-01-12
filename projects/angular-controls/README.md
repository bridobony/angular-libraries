## Angular Controls

The source for this package are in the [AnglularControls](https://github.com/bridobony/angular-libraries) repo.

License: MIT

## Intructions

# General
If you use icons from Font Awesome, you have it referenced. For example, you can put this in the head of index.html:
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

# Site Nav Bar
To use the Site Nav Bar, add <lib-site-nav></lib-site-nav> to your template and import the SiteNavModule. 
The configuration will look for the config/sitenav.json file in the assets folder. 

Sample Json:
{
  "logo": "images/logo.png",
  "logotext": "My Site",
  "left": [
    {
      "label": "First Menu",
      "url": "route",
      "icon": "fas fa-concierge-bell",
      "submenu": [
        {
          "label": "label",
          "url": "url"
        }
      ]
    },
    {
      "label": "Button",
      "url": "route",
      "icon": "fas fa-info-circle"
    }

  ],
  "right": [
    {
      "label": "Right Button",
      "url": "route",
      "icon": "fas fa-info-circle"
    }
  ]
}




## Build

Run `ng build angular-controls` to build the project. The build artifacts will be stored in the `dist/` directory.

