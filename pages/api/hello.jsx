import nextConnect from 'next-connect';
import middleware from '../../middleware/db';

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req, res) => {
    let doc = await req.db.collection('tst').find().sort({_id:-1}).limit(6).toArray()
    res.send(doc);
});

export default handler;