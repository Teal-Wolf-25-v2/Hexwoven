# Hexwoven

repo for the Hexwoven modpack now in packwiz format

## For Contributors
We use a software called [Packwiz](https://packwiz.infra.link/) to manage the modpack. If you want to add a Modrinth mod you should run `packwiz modrinth add <slug>`.  Any other files can be added by direct upload then running `packwiz refresh`. To update a Modrinth file you can run `packwiz update <slug>`. No matter what operation you do, please increment the last number in the version (eg 6.1.**10** -> 6.1.**11**) in pack.toml