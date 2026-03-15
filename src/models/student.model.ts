export type Student = {
	readonly charaName: string;
	readonly name: string;
	readonly lastName: string;
	readonly school: string;
	readonly age: number | null;
	readonly birthday: null | string;
	readonly height: number | null;
	readonly hobbies: string;
	readonly designer: null | string;
	readonly illustrator: string;
	readonly voice: string;
	readonly releaseDate: Date;
	readonly skinSet: string;
	readonly pageUrl: string;
	readonly imageProfileUrl: string;
	readonly imageFullUrl: string;
	readonly smallImageUrl: string;
	readonly audioUrl: string;
	readonly createdAt: Date;
}

export type MediaType = 'imgProfile' | 'imgFull' | 'audio';
