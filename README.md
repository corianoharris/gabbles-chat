# Project Title

This is a chat application. 

## Tech Stack

**Client:** Mustache

**Server:** Node, Express, PostgreSQL, Sequelize

## Testing Stack

**Unit:** 

**Intergration:** 

**Accessibility:** VoiceOver, AXE scan

## UI Mockups


## AXE Accessiblity Score


## Features

- Create, Update, Read, and Delete messages

## Lessons Learned

- What did you learn while building this project?
  -  The process to build a fullstack node application with SQL
- What challenges did you face?
  - Getting familir with backend logic and commands
- How did you overcome them?
  - Researching, utilizing sql playgrounds, and connecting with backend developers

## Roadmap

- Additional browser support

- Add more integrations

## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.

## Variables

### Global

```Global
vars
```

| indentifier | Type     | Return              | Description |
| :---------- | :------- | :------------------ | :---------- |
| `name`      | `string` | **Required**. value |             |

```Global
lets
```

| indentifier | Type     | Return              | Description |
| :---------- | :------- | :------------------ | :---------- |
| `name`      | `string` | **Required**. value |             |

```Global
constants
```

| indentifier | Type     | Return              | Description |
| :---------- | :------- | :------------------ | :---------- |
| `name`      | `string` | **Required**. value |             |

## Objects

### Global

```
indentifier
```

| Required | Property | Key     | Type     | Description |
| :------- | :------- | :------ | :------- | :---------- |
| `true`   | `name`   | `value` | `string` |             |

## Arrays

### Global

```
indentifier
```

| index    | Key     | Type     | Description |
| :------- | :------ | :------- | :---------- |
| `number` | `value` | `string` |             |

## Interfaces ( Props )

### Global

```Global
indentifier
```

| Required | Property | Key     | Type     | Description |
| :------- | :------- | :------ | :------- | :---------- |
| `true`   | `name`   | `value` | `string` |             |

| Where used    |
| :------------ |
| **Required**. |

## Functions

### Global

```Global
indentifier
```

| Parameter | Type     | Return              | Description |
| :-------- | :------- | :------------------ | :---------- |
| `name`    | `string` | **Required**. value |             |

## Appendix

Any additional information goes here