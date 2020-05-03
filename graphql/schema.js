const graqhql = require('graphql')
const PaintingType = require('./PaintingType')
const painting = require('../models/Painting')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema
} = graqhql

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        painting: {
            type: PaintingType,
            args: { id: { type: GraphQLString } },
            resolve(parent, args){
                return painting.findById(args.id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})