## 00's Spotify Global Hits: Save your favorites 🎵
This web app lets you explore and enjoy a public Spotify playlist featuring the top global hits from the 2000s. Built using the Spotify Web API, the app allows users to browse the playlist freely and, if they choose to connect their Spotify account, like songs to save them directly to their Liked Songs library.


## Features and key points ✨

 - 🔗  Spotify Integration: Connect your Spotify account, getting authenticated (using NextAuth.js in the background), to interact with the playlist. You can like it, and it will be added to your Liked Songs library. This feature includes handling tokens and automatic token refresh.

- ❤️ Save Your Favorites:  Like songs, and they’ll be added to your personal Liked Songs library on Spotify. It uses the Spotify Web API to make a PUT request (only if you are authenticated). It includes optimistic UI and a minimalistic notification system to create a smooth experience for the user.

- 🌀 Interactive Carousel: Navigate through the playlist smoothly with an interactive carousel for an engaging browsing experience.

## Tech stack 🛠️ 
- TypeScript
- Next.js 15
- NextAuth.js (for authentication)
- Spotify Web API
- Shadcn
- Tailwind CSS

## Installation 🚀
 Prerequisites: 
 - Node.js (https://nodejs.org) (Latest version recommended)
 - Spotify Developer Account (https://developer.spotify.com/documentation/web-api/tutorials/getting-started)

### 1.- Clone the repository

```bash
git clone https://github.com/alejandroacd/spotify-global-hits.git
cd spotify-global-hits
```


### 2.- Install dependencies

 
```bash
npm install
# or 
pnpm install
# you can use bun, yarn or whatever you want too
```

### 3.- Setup enviroment variables
- Create a .env.local file in the root of the project
- Add the following variables (you need a Spotify API key):

```bash
# .env.local
NEXT_PUBLIC_SPOTIFY_CLIENT_ID=your_spotify_client_id
NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
NEXTAUTH_SECRET=openssl rand -base64 32
NEXTAUTH_URL=http://localhost:3000
```

### 4.- Run the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### 4.- Ualáaa ✨✨✨
The app should now be running at http://localhost:3000 🚀
