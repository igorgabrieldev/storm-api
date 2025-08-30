import * as path from 'path';
import * as moduleAlias from 'module-alias';

const rootDir = path.resolve(__dirname, '../..');

moduleAlias.addAliases({
  '@src': path.join(rootDir, 'src'),
  '@test': path.join(rootDir, 'test'),
});
