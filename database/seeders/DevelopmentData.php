<?php

namespace Database\Seeders;


use App\Models\Ab_Article;
use App\Models\Ab_ArticleCategory;
use App\Models\Ab_User;
use DateTime;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DevelopmentData extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /**
         * ab_user table
         */
        DB::table('ab_user')->truncate();
        $userPath = 'resources/csv/user.csv';

        $handleUser = fopen(base_path($userPath), "r");
        $headerUser = fgetcsv($handleUser); // Read the first line as headers

        while (($row = fgetcsv($handleUser)) !== false) {
                $items = explode(";", $row[0]); // explode(): Argument #2 ($string) must be of type string, array given
            Ab_User::create([
                    'id' => $items[0],
                    'ab_name' => $items[1],
                    'ab_password' => $items[2],
                    'ab_mail' => $items[3]
                ]);
        }
        fclose($handleUser);

        /**
         * ab_article table
         */
        DB::table('ab_article')->truncate();
        $articlePath = 'resources/csv/articles.csv';

        $handleArticle = fopen(base_path($articlePath), "r");
        $headerArticle = fgetcsv($handleArticle); // Read the first line as headers

        while (($row = fgetcsv($handleArticle)) !== false) {
            if (count($row) == 1) {
                $items = explode(";", $row[0]); // explode(): Argument #2 ($string) must be of type string, array given
                Ab_Article::create([
                    'id' => $items[0],
                    'ab_name' => $items[1],
                    'ab_price' => str_replace('.', '', $items[2]),
                    'ab_description' => $items[3],
                    'ab_creator_id' => $items[4],
                    'ab_createdate' => $this->convertTimestamp($items[5]),
                ]);
            }
            if (count($row) == 2) {
                $newRow = $row[0] . $row[1];
                $items = explode(";", $newRow); // explode(): Argument #2 ($string) must be of type string, array given
                Ab_Article::create([
                    'id' => $items[0],
                    'ab_name' => $items[1],
                    'ab_price' => str_replace('.', '', $items[2]),
                    'ab_description' => $items[3],
                    'ab_creator_id' => $items[4],
                    'ab_createdate' => $this->convertTimestamp($items[5]),
                ]);
            }

            if (count($row) == 3) {
                $newRow = $row[0] . $row[1] . $row[2];
                $items = explode(";", $newRow); // explode(): Argument #2 ($string) must be of type string, array given
                Ab_Article::create([
                    'id' => $items[0],
                    'ab_name' => $items[1],
                    'ab_price' => str_replace('.', '', $items[2]),
                    'ab_description' => $items[3],
                    'ab_creator_id' => $items[4],
                    'ab_createdate' => $this->convertTimestamp($items[5]),
                ]);
            }

        }
        fclose($handleArticle);

        /**
         * ab_articlecategory table
         */
        DB::table('ab_articlecategory')->truncate();
        $articleCategoryPath = 'resources/csv/articlecategory.csv';

        $handleArticleCategory = fopen(base_path($articleCategoryPath), "r");
        $headerArticleCategory = fgetcsv($handleArticleCategory); // Read the first line as headers

        while (($row = fgetcsv($handleArticleCategory)) !== false) {
            $items = explode(";", $row[0]); // explode(): Argument #2 ($string) must be of type string, array given
            Ab_ArticleCategory::create([
                'id' => $items[0],
                'ab_name' => $items[1],
                'ab_parent' => str_replace('NULL', null, (int) $items[2])
            ]);
        }
        fclose($handleArticleCategory);



    }

    function convertTimestamp($timestamp): string
    {
        $datetime = DateTime::createFromFormat('d.m.y H:i', $timestamp);
        return $datetime->format('Y-m-d H:i:s');
    }
}
