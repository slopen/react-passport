import mongoose from 'mongoose';

const {ObjectId} = mongoose.Types;

const toJSON = (model) => {
	const data = model.toObject
		? model.toObject ()
		: model;

	delete data.__v;
	delete data._id;

	return data;
};

export default class Model {

	static toJSON (model) {
		if (Array.isArray (model)) {
			return model.map ((item) =>
				toJSON (item)
			);
		} else {
			return toJSON (model);
		}
	}

	constructor ({Name, Schema}) {
		if (!Name || !Schema) {
			throw new Error ('name and schema are required');
		}

		this.Model = mongoose
			.model (Name, Schema);
	}

	async find (data) {
		if (!data) {
			throw new Error ('no data to find');
		}

		const {Model} = this;
		const model = await Model.find (data);

		if (model) {
			return model;
		}

		throw new Error ('not found');
	}

	async findById (id) {

		if (!ObjectId.isValid (id)) {
			throw new Error ('id is invalid ' + id);
		}

		const {Model} = this;
		const model = await Model.findById (id)

		if (model) {
			return model;
		}

		throw new Error ('not found by id ' + id);
	}

	async update (_id, data) {
		const {Model} = this;

		return await Model.findOneAndUpdate ({_id}, data);
	}

	async create (data) {
		const {Model} = this;
		const model = new Model (data);

		return await model.save ();
	}

	async delete (data) {
		const {Model} = this;
		const model = Model.find (data);

		return await model.remove ();
	}

}