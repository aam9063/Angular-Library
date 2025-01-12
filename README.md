## Angular Library **@aamdev/ngx-components**

![Angular](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTNg06p6VGqYMJA1HCbOgfkKLV8oQcE4sOkg&s)

## Content

- [Installation](#installation)
- [Use](#use)
- [Components Included](#components-included)
- [Directives Included](#directives-included)
- [Installation from npm](#installation-from-npm)
- [Contribution](#contribution)
- [License](#license)

## Installation

To install the @aamdev/ngx-components library from npm, follow these steps:
1. Open a terminal in the root directory of your Angular project.
2. Run the following command to install the library:

```sh
npm install @aamdev/ngx-components
```

## Use

```sh
import { ToButtonModule } from @aamdev/top-button.module.ts;

@NgModule({
    imports: [
        TopButtonModule
        // other modules
    ],
    // other configuration modules
})
export class AppModule { }
```

## Components Included
- **Top-Button**: Button in footer to scroll to the beginning.
- **Card-User**: Card to group user data.

## Directives Included
- **Highlight**: Used to mark found text

## Contribution
1. Fork the repository.
2. Create a branch for your new feature (git checkout -b new-feature).
3. Make your changes and commit (git commit -m 'Add new functionality').
4. Push your changes to your fork (git push origin new-feature).
5. Create a Pull Request on GitHub

## License
This project is licensed under the MIT license - see the LICENSE file for details.
