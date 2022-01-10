import { NextApiRequest, NextApiResponse } from 'next';
import { gql, ApolloServer } from 'apollo-server-micro';
import { connectToDatabase } from '../../lib/mongodb';
import { ObjectId } from 'mongodb';
export const config = {
   api: {
      bodyParser: false,
   },
};
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   res.setHeader('Access-Control-Allow-Credentials', 'true');
   res.setHeader('Access-Control-Allow-Origin', 'https://studio.apollographql.com');
   res.setHeader(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers'
   );
   res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS, HEAD');
   const { db } = await connectToDatabase();
   const typeDefs = gql`
      type Post {
         _id: String
         author: String
         content: String
      }
      type Result {
         succeeded: Boolean!
         error_message: String
      }
      type Query {
         posts(page: Int): [Post]!
         post(id: String!): Post
      }
      type Mutation {
         post(author: String!, content: String!): Result!
      }
   `;
   const resolvers = {
      Query: {
         posts: async (_, arg) => {
            const page = arg.page ?? 0;
            return db
               .collection('posts')
               .find()
               .limit(10)
               .skip(page * 10)
               .toArray();
         },
         post: async (_, arg) => {
            let findID;
            try {
               findID = new ObjectId(arg.id);
            } catch (e) {
               return null;
            }
            return db.collection('posts').findOne({ _id: findID });
         },
      },
      Mutation: {
         post: (_par, arg) => {
            try {
               db.collection('posts').insertOne({ author: arg.author, content: arg.content });
               return {
                  succeeded: true,
               };
            } catch (e) {
               return {
                  succeeded: false,
                  error_message: e,
               };
            }
         },
      },
   };
   const server = new ApolloServer({
      typeDefs,
      resolvers,
   });
   const startServer = server.start();
   if (req.method === 'OPTIONS') {
      res.end();
      return false;
   }
   await startServer;
   await server.createHandler({
      path: '/api/graphql',
   })(req, res);
}
