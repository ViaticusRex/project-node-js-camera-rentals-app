# Camera Rentals Store Command Line App

## Setup
1. **Fork** and **Clone** this repository.
2. `cd` into the cloned folder.
3. run `npm install`

## Usage
- `npm run create` to add a new camera to the list
- `npm run showAll` to show info of all of the cameras in the list
- `npm run isolate` to show info of a single camera in the list by it's id
- `npm run delete` to delete a camera from the list by it's id
- `npm run update` to edit info of a camera by it's id

## Command Description

### `create`:
- Required parameters: `name`, `sensorSize`, `price`, `experienceLevel`
- Usage: `npm run create name=<name> sensorSize=<sensorSize> price=<price> experienceLevel=<experienceLevel>`

### `showAll`:
- Required parameters: none, the command will print the full list of cameras.
- Usage: `npm run showAll`

### `isolate`:
- Required parameters: `id` (MUST know id, view full list of cameras)
- Usage: `npm run isolate id=<id>`

### `delete`:
- Required parameters: `id` (MUST know id, view full list of cameras)
- Usage: `npm run delete id=<id>`

### `update`:
- Required parameters: `id` (MUST know id, view full list of cameras)
- Usage `npm run update id=<id>`