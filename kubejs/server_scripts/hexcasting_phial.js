ServerEvents.recipes(event => {
	event.shapeless("hexcasting:battery", [Item.of("hexcasting:battery"), Item.of("hexcasting:battery")]).modifyResult((grid, result) => {
		let phials = grid.findAll(Item.of("hexcasting:battery").ignoreNBT())
		let media = 0
		let maxMedia = 0
		let maxMedias = []
		let recharge = 0
		let nbt
		phials.forEach(phial => {
			media += phial.nbt["hexcasting:media"]
			recharge += (phial.nbt["hexcasting:start_media"] - phial.nbt["hexcasting:media"])*0.1
			maxMedias.push(phial.nbt["hexcasting:start_media"])
			if (phial.nbt != null) nbt = phial.nbt
    });

		maxMedia = Math.round(Math.max(...maxMedias) + recharge)
		if (nbt == undefined && media > 128) return itemstack
		nbt["hexcasting:media"] = media
		nbt["hexcasting:start_media"] = maxMedia
		return result.withNBT(nbt)
	});
});
