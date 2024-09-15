const ManifestModel = require('../models/manifest'); 

const addToManifest = async (req, res) => {
  try {
    const { userId, manifestList } = req.body;
    console.log(ManifestModel)
    let manifest = await ManifestModel.findOne({ userId });
    console.log(manifest)
    if (!manifest) {
      manifest =  ManifestModel.create({ userId, manifestList });
    }

    const update = await ManifestModel.updateOne;
    await manifest.save();

    res.json({ success: false, message: 'Item added to manifest successfully', manifest });
  } catch ({name,message}) {
    res.status(500).json({ status: name, message:  error });
  }
};

const removeFromManifest = async (req, res) => {
  try {
    const { userId } = req.body;

    const manifest = await ManifestModel.findOneAndDelete({ userId });
    if (!manifest) {
      return res.status(404).json({ success: false, message: 'Manifest list not found' });
    }

    // manifest.items = manifest.items.filter(item => item.id !== itemId);
    

    res.json({ success: true, message: 'Item removed from manifest successfully', manifest });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error removing item from manifest', error });
  }
};

const getManifestList = async (req, res) => {
  try {
    const { userId } = req.params;

    const manifest = await ManifestModel.findOne({ userId });
    if (!manifest) {
      return res.status(404).json({ success: false, message: 'Manifest list not found' });
    }

    res.json({ success: true, manifest: manifest });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error retrieving manifest list', error });
  }
};

const saveManifestList = async (req, res) => {
  try {
    const { userId, manifestList } = req.body;

    let manifest = await ManifestModel.findOne({ userId });
    if (!manifest) {
      manifest = await ManifestModel.create({ userId,  manifestList });
    
    }

    await manifest.save();

    res.json({ success: true, message: 'Manifest list saved successfully', data: manifest });
  } catch ({name,message}) {
    res.status(500).json({ success: false, message });
  }
};

module.exports = {
  addToManifest,
  removeFromManifest,
  getManifestList,
  saveManifestList,
};
