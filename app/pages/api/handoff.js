import { data } from '../../data/handoff.data'

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(data)
  } else if (req.method === 'POST') {
    const data = req.body.handoff
    console.log(data)
    const newData = {
      id: Date.now(),
      text: data,
    }
    data.push(newData)
    res.status(201).json(newData)
  }
}
