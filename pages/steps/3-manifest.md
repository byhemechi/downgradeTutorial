import NavBar from "../../components/navbar";
import Head from "next/head";

<Head>
  <title>Downgrade step 3 - Building a download command</title>
</Head>

# Building a download command

Steam's `download_depot` command takes the format

```
download_depot [app id] [depot id] [manifest id]
```

The App id refers to the game we're downloading, in this case Beat Saber is 620980

The Depot ID is a fixed number that refers to a game's update track. For the stable release, it's almost always the app id + 1 (in our case, 620981).

The Manifest ID is what we care about here - it refers to a specific version of a game, and is what we need to find out.

```
download_depot 620980 620981 [manifest id]
```

The first 2 parts of the command are done, now it's time to find our last parameter, the Manifest ID.

## Finding the Manifest ID

Beat Saber's list of manifests can be found at [SteamDB](https://steamdb.info/depot/620981/history/).

To find the correct Manifest ID, work downwards through the versions, with the one at the top being the most recent.

In the 99% of circumstances where you just want to go back one version before mods are updated, choose the second one from the top.

Copy the 19 digit number into your download command, and you'll end up with something like this (this example being for Beat Saber 1.19.0)

```
download_depot 620980 620981 8948172000430595334
```

Once you've finished entering your command, press enter. Unfortunately, there's no progress bar, so you're just going to have to wait until it finishes to see progress.

Once you see `Depot download complete`, you're ready to move on to the next step
