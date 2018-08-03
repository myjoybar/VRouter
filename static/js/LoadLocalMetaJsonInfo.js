import axios from 'axios';
import globalConfig from '../../static/js/GlobalConfig'
function loadLocalMetaJsonInfo(callback) {
    axios.get(globalConfig.localMetaJsonPath).then((response) => {
            var data = response.data.metas[1];
            console.log(data);
            globalConfig.setDescription(data.description)
            globalConfig.setog_title(data.og_title)
            globalConfig.setog_image(data.og_image)
            globalConfig.setog_site_name(data.og_site_name)
            globalConfig.setog_url(data.og_url)
            globalConfig.setog_type(data.og_type)
            console.log("globalConfig.description=" + globalConfig.description);
            console.log("globalConfig.og_title=" + globalConfig.og_title);
            console.log("globalConfig.og_image=" + globalConfig.og_image);
            console.log("globalConfig.og_site_name=" + globalConfig.og_site_name);
            console.log("globalConfig.og_url=" + globalConfig.og_url);
            console.log("globalConfig.og_type=" + globalConfig.og_type);
            callback();
        }
    ).catch((err) => {
            console.log(err);
        }
    );
}

export {
    loadLocalMetaJsonInfo,
}
