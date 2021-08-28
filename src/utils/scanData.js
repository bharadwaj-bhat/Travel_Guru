import { HotelData } from "../fakeData/HotelData";

export function scanData(payload) {
	const {
		name,
		price,
		star,
		advisor,
		hotelWith,
		localities,
		amenities,
		propertyType,
		hotelChain,
	} = payload;
	let data = HotelData;
	if (name.length !== 0) {
		data = data.filter((item) => {
			return item.name.toLowerCase().includes(name.toLowerCase());
		});
	}
	if (price[0] || price[1] || price[2] || price[3] || price[4] || price[5]) {
		let price_final = [];
		if (price[0]) {
			let price_temp = data.filter((item) => {
				return item.price > 0 && item.price <= 1000;
			});
			price_final = [...price_final, ...price_temp];
		}
		if (price[1]) {
			let price_temp = data.filter((item) => {
				return item.price > 1000 && item.price <= 2000;
			});
			price_final = [...price_final, ...price_temp];
		}
		if (price[2]) {
			let price_temp = data.filter((item) => {
				return item.price > 2000 && item.price <= 4000;
			});
			price_final = [...price_final, ...price_temp];
		}
		if (price[3]) {
			let price_temp = data.filter((item) => {
				return item.price > 4000 && item.price <= 7000;
			});
			price_final = [...price_final, ...price_temp];
		}
		if (price[4]) {
			let price_temp = data.filter((item) => {
				return item.price > 7000 && item.price <= 10000;
			});
			price_final = [...price_final, ...price_temp];
		}
		if (price[5]) {
			let price_temp = data.filter((item) => {
				return item.price > 10000;
			});
			price_final = [...price_final, ...price_temp];
		}
		data = [...price_final];
	}
	if (star[0] || star[1] || star[2] || star[3] || star[4]) {
		let star_final = [];
		if (star[0]) {
			let star_temp = data.filter((item) => {
				return Math.floor(item.rating) === 1;
			});
			star_final = [...star_final, ...star_temp];
		}
		if (star[1]) {
			let star_temp = data.filter((item) => {
				return Math.floor(item.rating) === 2;
			});
			star_final = [...star_final, ...star_temp];
		}
		if (star[2]) {
			let star_temp = data.filter((item) => {
				return Math.floor(item.rating) === 3;
			});
			star_final = [...star_final, ...star_temp];
		}
		if (star[3]) {
			let star_temp = data.filter((item) => {
				return Math.floor(item.rating) === 4;
			});
			star_final = [...star_final, ...star_temp];
		}
		if (star[4]) {
			let star_temp = data.filter((item) => {
				return Math.floor(item.rating) === 5;
			});
			star_final = [...star_final, ...star_temp];
		}

		data = [...star_final];
	}
	if (advisor[0] || advisor[1] || advisor[2] || advisor[3] || advisor[4]) {
		let advisor_final = [];
		if (advisor[0]) {
			let advisor_temp = data.filter((item) => {
				return Math.floor(item.tripAdvicerRating) === 1;
			});
			advisor_final = [...advisor_final, ...advisor_temp];
		}
		if (advisor[1]) {
			let advisor_temp = data.filter((item) => {
				return Math.floor(item.tripAdvicerRating) === 2;
			});
			advisor_final = [...advisor_final, ...advisor_temp];
		}
		if (advisor[2]) {
			let advisor_temp = data.filter((item) => {
				return Math.floor(item.tripAdvicerRating) === 3;
			});
			advisor_final = [...advisor_final, ...advisor_temp];
		}
		if (advisor[3]) {
			let advisor_temp = data.filter((item) => {
				return Math.floor(item.tripAdvicerRating) === 4;
			});
			advisor_final = [...advisor_final, ...advisor_temp];
		}
		if (advisor[4]) {
			let advisor_temp = data.filter((item) => {
				return Math.floor(item.tripAdvicerRating) === 5;
			});
			advisor_final = [...advisor_final, ...advisor_temp];
		}

		data = [...advisor_final];
	}
	if (hotelWith[0] || hotelWith[1] || hotelWith[2] || hotelWith[3]) {
		let hotel_with_final = data;
		if (hotelWith[0]) {
			let hotel_with_temp = hotel_with_final.filter((item) => {
				return item.cleanPass === true;
			});
			hotel_with_final = [...hotel_with_temp];
		}
		if (hotelWith[1]) {
			let hotel_with_temp = hotel_with_final.filter((item) => {
				return item.feeCancellation === true;
			});
			hotel_with_final = [...hotel_with_temp];
		}
		if (hotelWith[2]) {
			let hotel_with_temp = hotel_with_final.filter((item) => {
				return item.couple === true;
			});
			hotel_with_final = [...hotel_with_temp];
		}
		if (hotelWith[3]) {
			let hotel_with_temp = hotel_with_final.filter((item) => {
				return item.breakfast === true;
			});
			hotel_with_final = [...hotel_with_temp];
		}
		data = [...hotel_with_final];
	}
	if (
		localities[0] ||
		localities[1] ||
		localities[2] ||
		localities[3] ||
		localities[4] ||
		localities[5] ||
		localities[6] ||
		localities[7] ||
		localities[8] ||
		localities[9]
	) {
		let localities_final = [];
		if (localities[0]) {
			let localities_temp = data.filter((item) => {
				return item.location === "Village Shey";
			});
			localities_final = [...localities_final, ...localities_temp];
		}
		if (localities[1]) {
			let localities_temp = data.filter((item) => {
				return item.location === "Old Road";
			});
			localities_final = [...localities_final, ...localities_temp];
		}
		if (localities[2]) {
			let localities_temp = data.filter((item) => {
				return item.location === "Changspa";
			});
			localities_final = [...localities_final, ...localities_temp];
		}
		if (localities[3]) {
			let localities_temp = data.filter((item) => {
				return item.location === "Skara";
			});
			localities_final = [...localities_final, ...localities_temp];
		}
		if (localities[4]) {
			let localities_temp = data.filter((item) => {
				return item.location === "Ayu";
			});
			localities_final = [...localities_final, ...localities_temp];
		}
		if (localities[5]) {
			let localities_temp = data.filter((item) => {
				return item.location === "Chulung Old Road";
			});
			localities_final = [...localities_final, ...localities_temp];
		}
		if (localities[6]) {
			let localities_temp = data.filter((item) => {
				return item.location === "Leh";
			});
			localities_final = [...localities_final, ...localities_temp];
		}
		if (localities[7]) {
			let localities_temp = data.filter((item) => {
				return item.location === "Chulung";
			});
			localities_final = [...localities_final, ...localities_temp];
		}
		if (localities[8]) {
			let localities_temp = data.filter((item) => {
				return item.location === "Lower Tukcha Road";
			});
			localities_final = [...localities_final, ...localities_temp];
		}
		if (localities[9]) {
			let localities_temp = data.filter((item) => {
				return item.location === "Upper Tukcha Road";
			});
			localities_final = [...localities_final, ...localities_temp];
		}
		data = [...localities_final];
	}
	if (
		amenities[0] ||
		amenities[1] ||
		amenities[2] ||
		amenities[3] ||
		amenities[4] ||
		amenities[5] ||
		amenities[6] ||
		amenities[7] ||
		amenities[8] ||
		amenities[9]
	) {
		let amenities_final = [];
		if (amenities[0]) {
			let amenities_temp = data.filter((item) => {
				return item.wifi === true;
			});
			console.log(amenities_temp);
			amenities_final = [...amenities_final, ...amenities_temp];
		}
		if (amenities[1]) {
			let amenities_temp = data.filter((item) => {
				return item.airportTranspotation === true;
			});
			amenities_final = [...amenities_final, ...amenities_temp];
		}
		if (amenities[2]) {
			let amenities_temp = data.filter((item) => {
				return item.laundry === true;
			});
			amenities_final = [...amenities_final, ...amenities_temp];
		}
		if (amenities[3]) {
			let amenities_temp = data.filter((item) => {
				return item.hotles === true;
			});
			amenities_final = [...amenities_final, ...amenities_temp];
		}
		if (amenities[4]) {
			let amenities_temp = data.filter((item) => {
				return item.bar === true;
			});
			amenities_final = [...amenities_final, ...amenities_temp];
		}
		if (amenities[5]) {
			let amenities_temp = data.filter((item) => {
				return item.children === true;
			});
			amenities_final = [...amenities_final, ...amenities_temp];
		}
		if (amenities[6]) {
			let amenities_temp = data.filter((item) => {
				return item.swimmingPool === true;
			});
			amenities_final = [...amenities_final, ...amenities_temp];
		}
		if (amenities[7]) {
			let amenities_temp = data.filter((item) => {
				return item.hotles === true;
			});
			amenities_final = [...amenities_final, ...amenities_temp];
		}
		if (amenities[8]) {
			let amenities_temp = data.filter((item) => {
				return item.resort === true;
			});
			amenities_final = [...amenities_final, ...amenities_temp];
		}
		if (amenities[9]) {
			let amenities_temp = data.filter((item) => {
				return item.parking === true;
			});
			amenities_final = [...amenities_final, ...amenities_temp];
		}
		data = [...amenities_final];
	}
	if (
		propertyType[0] ||
		propertyType[1] ||
		propertyType[2] ||
		propertyType[3] ||
		propertyType[4]
	) {
		let property_final = data;
		if (propertyType[0]) {
			let property_temp = property_final.filter((item) => {
				return item.hotles === true;
			});
			property_final = [...property_temp];
		}
		if (propertyType[1]) {
			let property_temp = property_final.filter((item) => {
				return item.resort === true;
			});
			property_final = [...property_temp];
		}
		if (propertyType[2]) {
			let property_temp = property_final.filter((item) => {
				return item.guestHouse === true;
			});
			property_final = [...property_temp];
		}
		if (propertyType[3]) {
			let property_temp = property_final.filter((item) => {
				return item.BedAndBreakfast === true;
			});
			property_final = [...property_temp];
		}
		if (propertyType[4]) {
			let property_temp = property_final.filter((item) => {
				return item.villa === true;
			});
			property_final = [...property_temp];
		}
		data = [...property_final];
	}
	if (hotelChain[0] || hotelChain[1]) {
		let hotel_final = data;
		if (hotelChain[0]) {
			let hotal_temp = hotel_final.filter((item) => {
				return item.yatraSmart === true;
			});
			hotel_final = [...hotal_temp];
		}
		if (hotelChain[1]) {
			let hotal_temp = hotel_final.filter((item) => {
				return item.welcomeHeritageHotel === true;
			});
			hotel_final = [...hotal_temp];
		}
		data = [...hotel_final];
	}
	console.log(data);
	return [...data];
}
