[![CircleCI](https://circleci.com/gh/openvir/virusim.svg?style=svg)](https://circleci.com/gh/openvir/virusim)
[![TypeScript](https://badges.frapsoft.com/typescript/code/typescript.svg?v=101)](https://github.com/ellerbrock/typescript-badges/)

<img src="https://github.com/openvir/virusim/blob/master/docs/logo/logo.png" width="400">

# ViruSim

Fighting SARS-CoV-2 with education.

## Vision

ViruSim will be a configurable simulation of a viral infection on a cellular level. The software is intended to be used inside the browser mainly for educational purposes (for example using it in online courses about viruses, immunology and viral infections). Therefore nice visuals will be a main part of this project. This project is open-source and non-profit. While the primary focus for this project will most probably be educational purposes further (scientific) applications might be possible in the future.

## Getting started

### Live version

A live version of the software can be found at [https://www.virusim.org](https://www.virusim.org).

### Running locally

To start development and run the project locally, run

```
yarn install
yarn dev
```

Then open [http://localhost:8000](http://localhost:8000) in your web browser.

### Learning about viruses

A very good starting point is the following online course:
- [Viruses & How to Beat Them: Cells, Immunity, Vaccines](https://courses.edx.org/courses/course-v1:IsraelX+Virus101x+2T2018/)

## Deployment

The `master` branch is automatically deployed to [https://www.virusim.org](https://www.virusim.org) after passing the continuous integration on CirlceCI at [https://circleci.com/gh/dominik1001/virusim](https://circleci.com/gh/dominik1001/virusim).

## Tech Stack

- TypeScript
- Webpack
- [Babylon.js](https://www.babylonjs.com/)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

### Who are you looking for?

Currently we're looking for enthusiastic people who are willing to join this open-source and non-profit project. Concretely we're looking for:
- JavaScript/TypeScript developers ideally with a background in 2D/3D rendering
- Biologists/Immunologists/Virologists/MDs to guide the project and to input useful requirements and domain-specific knowledge
- 2D/3D Designers

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
